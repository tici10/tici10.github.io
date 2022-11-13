
        document.getElementById("button_cal").onclick = function() {calculo_panel()};

        function calculo_panel() {
            var cal = document.getElementById("calculo-background");
            if (cal.style.visibility === "hidden") {
                cal.style.transition = "0.3s";
                cal.style.visibility = "visible";
                cal.style.opacity = "100%";
                document.getElementById("content-texts").style.transition = "0.1s";
                document.getElementById("content-texts").style.visibility = "hidden";
                document.getElementById("content-texts").style.opacity = "0%";
            } else {
                cal.style.transition = "0.3s";
                cal.style.visibility = "hidden";
                cal.style.opacity = "0%";
                document.getElementById("content-texts").style.transition = "0.1s";
                document.getElementById("content-texts").style.visibility = "visible";
                document.getElementById("content-texts").style.opacity = "100%";
            }
        }

     


        document.getElementById("calcular-imc").onclick = function() {calculodoimc()};


        function calculodoimc() {
            var altura = document.getElementById("altura_number").value;
            var peso = document.getElementById("peso_number").value;
            var resultado_imc = peso / altura ** 2
            

            if (resultado_imc >= 18.5 && resultado_imc <= 24.9) {
                document.getElementById("imc-results").innerHTML = "Seu IMC: <b>" + resultado_imc
                document.getElementById("text-calculo").style.bottom = "119px"
                document.getElementById("text-calculo").style.left = "372px"
                document.getElementById("text-calculo").style.width = "218px"
                document.getElementById("imc-results").style.backgroundColor = "#1f5eaf"
                document.getElementById("imc-results").style.borderRadius = "20px"
                document.getElementById("imc-results").style.padding = "15px"
                document.getElementById("imc-results").style.color = "white"
                document.getElementById("text-calculo").style.whiteSpace = "nowrap"
                document.getElementById("text-calculo").style.letterSpacing = "3px"
                document.getElementById("text-calculo").style.overflow = "hidden"
                document.getElementById("text-calculo-class").style.visibility = "visible"
                document.getElementById("imc-results-nivel").innerHTML = "Classificação: <b style='padding: 10px; border-radius: 10px; background-color: rgb(59, 209, 59);'>Normal</b>"
            }
            if (resultado_imc >= 25 && resultado_imc <= 29.9) {
                document.getElementById("imc-results").innerHTML = "Seu IMC: <b>" + resultado_imc
                document.getElementById("text-calculo").style.bottom = "119px"
                document.getElementById("text-calculo").style.left = "372px"
                document.getElementById("text-calculo").style.width = "218px"
                document.getElementById("imc-results").style.backgroundColor = "#1f5eaf"
                document.getElementById("imc-results").style.borderRadius = "20px"
                document.getElementById("imc-results").style.padding = "15px"
                document.getElementById("imc-results").style.color = "white"
                document.getElementById("text-calculo").style.whiteSpace = "nowrap"
                document.getElementById("text-calculo").style.letterSpacing = "3px"
                document.getElementById("text-calculo").style.overflow = "hidden"
                document.getElementById("text-calculo-class").style.visibility = "visible"
                document.getElementById("imc-results-nivel").innerHTML = "Classificação: <b style='padding: 10px; border-radius: 10px; background-color: rgb(59, 209, 59);'>Sobrepeso</b>"
            }
            if (resultado_imc >= 30 && resultado_imc <= 34.9) {
                document.getElementById("imc-results").innerHTML = "Seu IMC: <b>" + resultado_imc
                document.getElementById("text-calculo").style.bottom = "119px"
                document.getElementById("text-calculo").style.left = "372px"
                document.getElementById("text-calculo").style.width = "218px"
                document.getElementById("imc-results").style.backgroundColor = "#1f5eaf"
                document.getElementById("imc-results").style.borderRadius = "20px"
                document.getElementById("imc-results").style.padding = "15px"
                document.getElementById("imc-results").style.color = "white"
                document.getElementById("text-calculo").style.whiteSpace = "nowrap"
                document.getElementById("text-calculo").style.letterSpacing = "3px"
                document.getElementById("text-calculo").style.overflow = "hidden"
                document.getElementById("text-calculo-class").style.visibility = "visible"
                document.getElementById("imc-results-nivel").innerHTML = "Classificação: <b style='padding: 10px; border-radius: 10px; background-color: rgb(251, 255, 0);'>Obesidade Nivel I</b></b>"
            }
            if (resultado_imc >= 35 && resultado_imc <= 39.9) {
                document.getElementById("imc-results").innerHTML = "Seu IMC: <b>" + resultado_imc
                document.getElementById("text-calculo").style.bottom = "119px"
                document.getElementById("text-calculo").style.left = "372px"
                document.getElementById("text-calculo").style.width = "218px"
                document.getElementById("imc-results").style.backgroundColor = "#1f5eaf"
                document.getElementById("imc-results").style.borderRadius = "20px"
                document.getElementById("imc-results").style.padding = "15px"
                document.getElementById("imc-results").style.color = "white"
                document.getElementById("text-calculo").style.whiteSpace = "nowrap"
                document.getElementById("text-calculo").style.letterSpacing = "3px"
                document.getElementById("text-calculo").style.overflow = "hidden"
                document.getElementById("text-calculo-class").style.visibility = "visible"
                document.getElementById("imc-results-nivel").innerHTML = "Classificação: <b style='padding: 10px; border-radius: 10px; background-color: rgb(255, 123, 0);'>Obesidade Nivel II</b>"
            }
            if (resultado_imc >= 40) {
                document.getElementById("imc-results").innerHTML = "Seu IMC: <b>" + resultado_imc
                document.getElementById("text-calculo").style.bottom = "119px"
                document.getElementById("text-calculo").style.left = "372px"
                document.getElementById("text-calculo").style.width = "218px"
                document.getElementById("imc-results").style.backgroundColor = "#1f5eaf"
                document.getElementById("imc-results").style.borderRadius = "20px"
                document.getElementById("imc-results").style.padding = "15px"
                document.getElementById("imc-results").style.color = "white"
                document.getElementById("text-calculo").style.whiteSpace = "nowrap"
                document.getElementById("text-calculo").style.letterSpacing = "3px"
                document.getElementById("text-calculo").style.overflow = "hidden"
                document.getElementById("text-calculo-class").style.visibility = "visible"
                document.getElementById("imc-results-nivel").innerHTML = "Classificação: <b style='padding: 10px; border-radius: 10px; background-color: rgb(255, 0, 0);'>Obesidade Nivel III</b>"
            }

            if (resultado_imc <= 18.4) {
                document.getElementById("imc-results").innerHTML = "Seu IMC: <b>" + resultado_imc
                document.getElementById("text-calculo").style.bottom = "119px"
                document.getElementById("text-calculo").style.left = "372px"
                document.getElementById("text-calculo").style.width = "218px"
                document.getElementById("imc-results").style.backgroundColor = "#1f5eaf"
                document.getElementById("imc-results").style.borderRadius = "20px"
                document.getElementById("imc-results").style.padding = "15px"
                document.getElementById("imc-results").style.color = "white"
                document.getElementById("text-calculo").style.whiteSpace = "nowrap"
                document.getElementById("text-calculo").style.letterSpacing = "3px"
                document.getElementById("text-calculo").style.overflow = "hidden"
                document.getElementById("text-calculo-class").style.visibility = "visible"
                document.getElementById("imc-results-nivel").innerHTML = "Classificação: <b style='padding: 10px; border-radius: 10px; background-color: rgb(251, 255, 0);'>Magreza</b>"
            }
        }


        document.getElementById("user").onclick = function() {panel_user()};
        function panel_user() {
            var menu_panel = document.getElementById("menu_user");
            if (menu_panel.style.visibility === "hidden") {
                menu_panel.style.visibility = "visible"
                menu_panel.style.opacity = "100%"
            } else {
                menu_panel.style.visibility = "hidden"
                menu_panel.style.opacity = "0%"
            }
        }