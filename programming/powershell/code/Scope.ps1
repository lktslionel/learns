
Write-Output "Var X= $X"
Write-Output "Increment X by 10"
$X += 10
Write-Output "New Var X= $X"


# https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_functions_advanced_parameters?view=powershell-6


function FunctionName {
  param (
    OptionalParameters
  )
  
}

function Verb-Noun {
  [CmdletBinding()]
  param (
    
  )
  
  begin {
  }
  
  process {
  }
  
  end {
  }
}

function {
  [CmdletBinding()]
  param (
    
  )
  
  begin {
  }
  
  process {
  }
  
  end {
  }
}

function Get-SshKeys {
  [CmdletBinding()]

  param (
    [Parameter()]
    [ParameterType]
    $ParameterName  
  )
  
  begin {
  }
  
  process {
  }
  
  end {
  }
}