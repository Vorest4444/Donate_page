var ifDisplay = true;
function showDonateClick() {
  if(ifDisplay){
    document.getElementById("donAmount").style.display = "block";
  }else{
    document.getElementById("donAmount").style.display = "none";
  }
  ifDisplay = !ifDisplay;
}

function showOtherClick() {
    document.getElementById("custom").style.display = "block";
}

function goDonateClick() {
  document.getElementById("donate").style.display = "none";
  document.getElementById("custom").style.display = "none";
  document.getElementById("description").style.display = "block";
  console.log("GO");
}

function goNextClick() {
  console.log("GO");
  document.getElementById("description").style.display = "none";
  document.getElementById("confirm").style.display = "block";
}
