function habilitar(value)
{
  if(value=="1")
  {
    document.getElementById("id_alumno").disabled=false;
    document.getElementById("id_personal").disabled=true;
  }else if(value=>"2"){
    document.getElementById("id_alumno").disabled=true;
    document.getElementById("id_personal").disabled=false;
  }
}

