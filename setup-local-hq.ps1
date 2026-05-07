# Setup Script for Local High-Quality Videos
# Run this script to copy the uncompressed, high-quality videos into the website for local demonstration.
# Note: Do NOT deploy to Vercel after running this script, as the total size will exceed Vercel's limits.

$sourceDir = "D:\Code\WEBSITES"
$destDir = "C:\Users\Hagi\studio-website\public\assets"

Write-Host "Copying High-Quality Videos for Local Demo..." -ForegroundColor Cyan

# Define the file mappings (Source -> Destination)
$files = @(
    @{ Source = "ORIENT VIETNAM - 1010 YEARS THANG LONG - HANOI - Videos & Movies on Vimeo.mp4"; Dest = "thang-long.mp4" },
    @{ Source = "[ADVENTURE AND SENERITY AT AMANOI RESORT] by FlyAmazingStay - Videos & Movies on Vimeo.mp4"; Dest = "amanoi.mp4" },
    @{ Source = "YOUR VIETNAM_TEASER - Videos & Movies on Vimeo.mp4"; Dest = "your-vietnam.mp4" },
    @{ Source = "PRODUCTION CLIP.mp4"; Dest = "production-clip.mp4" },
    @{ Source = "CORGI EPISODES.mp4"; Dest = "corgi-episodes.mp4" },
    @{ Source = "Quảng cáo Skinbibi 2017 - Videos & Movies on Vimeo.mp4"; Dest = "skinbibi.mp4" },
    @{ Source = "AI PRODUCTION CLIP FROM IMG.mp4"; Dest = "ai-production.mp4" },
    @{ Source = "NH?NG D?A TR? KHONG CHA - short documentary film - Videos & Movies on Vimeo.mp4"; Dest = "nhung-dua-tre-khong-cha.mp4" },
    @{ Source = "Song Cau Town, Phu Yen, Vietnam - Videos & Movies on Vimeo.mp4"; Dest = "song-cau-town.mp4" }
)

foreach ($file in $files) {
    # Fix wildcard for strange characters like ? in file names
    $sourceFiles = Get-ChildItem -Path $sourceDir -Filter "*$($file.Source.Replace('?','*'))*" -ErrorAction SilentlyContinue
    if ($sourceFiles.Count -gt 0) {
        $sourcePath = $sourceFiles[0].FullName
        $destPath = Join-Path $destDir $file.Dest
        Write-Host "Copying $($file.Dest)..."
        Copy-Item $sourcePath $destPath -Force
    } else {
        Write-Host "Warning: Source file not found: $($file.Source)" -ForegroundColor Yellow
    }
}

Write-Host "Done! You can now run 'npm run dev' to view the site locally with high-quality videos." -ForegroundColor Green
Write-Host "Warning: To deploy to Vercel again, you must use the compressed videos instead to avoid the 100MB limit." -ForegroundColor Yellow
