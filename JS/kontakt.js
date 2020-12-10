function validate() {

            if (document.myForm.ime.value == "") {
                alert("Ime je obavezno polje!");
                document.myForm.ime.focus();
                return false;
            }

            if (document.myForm.prezime.value == "") {
                alert("Prezime je obavezno polje!");
                document.myForm.prezime.focus();
                return false;
            }


            if (document.myForm.email.value == '') {
                alert("Email je obavezno polje!");
                document.myForm.email.focus();
                return false;
            }
            
            if (document.myForm.email.value.indexOf('@') == -1) {
                alert("Email adresa nije u odgovarajućem formatu!");
                document.myForm.email.focus();
                return false;
            }

            
            return confirm("Uspešno ste zakazali svoj termin!");
            return (true);
}
