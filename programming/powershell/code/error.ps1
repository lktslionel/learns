
# Error Handling

# To look for the default behavior 
# for error handling, ru nthe following command:

$ErrorActionPreference

# or 

dir variable:*pref* | ? { $_.Name -like "*Error*" }

# Change behavior 
#
# -ErrorAction : SilentContinue, Stop, Inquire ('Suspend' to explore in debug mode ), 
# -ErrorVariable
#    Eg:  > Stop-Process -Id 1,4,5 -ErrorVariable err
#    > $err

# Get A more concise error view 
Stop-Process -Id 1,4,5 -ErrorVariable err
$ErrorView = "NormalView"
dir variable:*error*
$ErrorView = "CategoryView"
$err

# When using `try ... catch`
# Use -EA Stop -EV errorValue
# the 'Stop' Make you go to the 'catch block'

# $ErrorLog  can be used as a switch; coupled with $ErrorFile to log errors
# Or use WriteEventLog (https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/write-eventlog?view=powershell-5.1)

