
Write-Host "yeah"


if (10 -gt 2 ) {
  Write-Host "10 > 2"
}

$colors = "blue", "red" ,"green", "yellow"

foreach ($color in $colors) {
  Write-Host "Color: $color"
}