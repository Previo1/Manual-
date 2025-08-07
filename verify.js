document.getElementById("verifyBtn").addEventListener("click", function () {
  const fileInput = document.getElementById("paymentScreenshot");
  if (fileInput.files.length === 0) {
    alert("કૃપા કરીને પેમેન્ટનો સ્ક્રીનશોટ અપલોડ કરો.");
    return;
  }
  alert("મેન્યુઅલ ચકાસણી માટે પેમેન્ટ અપલોડ થયું છે.
આમ સહેલાઈથી ચેક કરી શકાય છે.");
  document.getElementById("downloadLink").style.display = "inline-block";
});
