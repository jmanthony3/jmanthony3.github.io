[void] [System.Reflection.Assembly]::LoadWithPartialName("System.Drawing")

[void] [System.Reflection.Assembly]::LoadWithPartialName("System.Windows.Forms")

$signature='[DllImport("user32.dll",CharSet=CharSet.Auto,CallingConvention=CallingConvention.StdCall)]
public static extern void mouse_event(long dwFlags, long dx, long dy, long cButtons, long dwExtraInfo);'

$SendMouseClick = Add-Type -memberDefinition $signature -name "Win32MouseEventNew" -namespace Win32Functions -passThru

$X = [System.Windows.Forms.Cursor]::Position.X
$Y = [System.Windows.Forms.Cursor]::Position.Y
Write-Output "X: $X | Y: $Y"

$xp = 1023
$yp = 647

$timeRequired = 1..720

foreach ($time in $timeRequired)	{
	[System.Windows.Forms.Cursor]::Position = New-Object System.Drawing.Point($xp, $yp)
	sleep -Seconds 300
	$SendMouseClick::mouse_event(0x00000002, 0, 0, 0, 0);
	$SendMouseClick::mouse_event(0x00000004, 0, 0, 0, 0);

	[System.Windows.Forms.Cursor]::Position = New-Object System.Drawing.Point($X, $Y)
	sleep -Seconds 300
	$SendMouseClick::mouse_event(0x00000002, 0, 0, 0, 0);
	$SendMouseClick::mouse_event(0x00000004, 0, 0, 0, 0);
}