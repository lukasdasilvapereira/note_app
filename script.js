const double = document.querySelector(".main2");

function clicar() {
    double.innerHTML += `
        <div class="container">
            <textarea placeholder="Empty Note" class="empty"></textarea>
        </div>
    `;
        }

// Escuta todos os cliques dentro de .main2 (inclusive dos que forem criados depois)
double.addEventListener("dblclick", function(e) {
    const container = e.target.closest(".container");
    if (container && double.contains(container)) {
        container.remove();
    }
});

