# Derives the two logo variants used by <Logo /> from public/logo.png
#   public/logo-light.png -> trimmed, original colors (white "Fio" + amber "MAX") for dark backgrounds
#   public/logo-dark.png  -> trimmed, neutral ink instead of white, for light backgrounds
# Both are cropped to the alpha bounding box so height-based sizing is predictable.

Add-Type -AssemblyName System.Drawing

$src = (Resolve-Path (Join-Path $PSScriptRoot "..\public\logo.png")).Path
$outDir = (Resolve-Path (Join-Path $PSScriptRoot "..\public")).Path

$csharp = @"
using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.Runtime.InteropServices;

public static class LogoVariants
{
    public static string Run(string src, string outLight, string outDark, byte inkR, byte inkG, byte inkB)
    {
        using (Bitmap orig = new Bitmap(src))
        {
            int w = orig.Width, h = orig.Height;

            BitmapData sd = orig.LockBits(new Rectangle(0, 0, w, h), ImageLockMode.ReadOnly, PixelFormat.Format32bppArgb);
            int stride = sd.Stride;
            byte[] sbuf = new byte[Math.Abs(stride) * h];
            Marshal.Copy(sd.Scan0, sbuf, 0, sbuf.Length);
            orig.UnlockBits(sd);

            byte[] light = new byte[w * h * 4];
            byte[] dark = new byte[w * h * 4];

            int minX = w, minY = h, maxX = -1, maxY = -1;

            for (int y = 0; y < h; y++)
            {
                for (int x = 0; x < w; x++)
                {
                    int si = y * stride + x * 4;
                    byte b = sbuf[si], g = sbuf[si + 1], r = sbuf[si + 2], a = sbuf[si + 3];
                    if (a == 0) continue;

                    int di = (y * w + x) * 4;

                    light[di + 0] = b; light[di + 1] = g; light[di + 2] = r; light[di + 3] = a;

                    int mx = Math.Max(r, Math.Max(g, b));
                    int mn = Math.Min(r, Math.Min(g, b));
                    bool neutral = (mx - mn) < 40; // white / grey ink, not the amber
                    if (neutral)
                    {
                        dark[di + 0] = inkB; dark[di + 1] = inkG; dark[di + 2] = inkR; dark[di + 3] = a;
                    }
                    else
                    {
                        dark[di + 0] = b; dark[di + 1] = g; dark[di + 2] = r; dark[di + 3] = a;
                    }

                    if (a > 8)
                    {
                        if (x < minX) minX = x;
                        if (y < minY) minY = y;
                        if (x > maxX) maxX = x;
                        if (y > maxY) maxY = y;
                    }
                }
            }

            if (maxX < 0) throw new Exception("logo.png has no visible pixels");
            Rectangle crop = new Rectangle(minX, minY, maxX - minX + 1, maxY - minY + 1);

            Save(light, w, h, crop, outLight);
            Save(dark, w, h, crop, outDark);

            return "source " + w + "x" + h + " -> trimmed " + crop.Width + "x" + crop.Height +
                   " (offset " + crop.X + "," + crop.Y + ")";
        }
    }

    static void Save(byte[] bgra, int w, int h, Rectangle crop, string path)
    {
        using (Bitmap full = new Bitmap(w, h, PixelFormat.Format32bppArgb))
        {
            BitmapData d = full.LockBits(new Rectangle(0, 0, w, h), ImageLockMode.WriteOnly, PixelFormat.Format32bppArgb);
            for (int y = 0; y < h; y++)
                Marshal.Copy(bgra, y * w * 4, (IntPtr)(d.Scan0.ToInt64() + y * d.Stride), w * 4);
            full.UnlockBits(d);

            using (Bitmap cropped = full.Clone(crop, PixelFormat.Format32bppArgb))
            {
                cropped.Save(path, ImageFormat.Png);
            }
        }
    }
}
"@

Add-Type -TypeDefinition $csharp -ReferencedAssemblies System.Drawing

# ink-900 (#0A0A0B) to match the footer text color
[LogoVariants]::Run(
    $src,
    (Join-Path $outDir "logo-light.png"),
    (Join-Path $outDir "logo-dark.png"),
    [byte]10, [byte]10, [byte]11
)
