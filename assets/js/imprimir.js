
document.addEventListener('DOMContentLoaded',VI());
  

function VI() {
  let Receituario = document.querySelector('.Receituario');

  
  let u = new URLSearchParams(window.location.search);

  let NP = u.get("NP");

  let idade = u.get("idade")

  let PM = u.get("PM");

  let NM = u.get("NM");

  let CRM = u.get("CRM");

  let UF = u.get("UF");

  let LA = u.get("LA");

  let CNES = u.get("CNES");

  let ED = u.get("ED");

  let cidade = u.get("cidade");

  let TL = u.get("TL");



  let DEM = u.get("DEM");
  let dtf = new Date(DEM);
  let dia = String(dtf.getDate()).padStart(2, '0');
  let mes = String(dtf.getMonth() + 1).padStart(2, '0'); 
  let ano = dtf.getFullYear();
  let nd = `${dia}/${mes}/${ano}`;

  console.log(DEM)


  Receituario.innerHTML = `
      <div><span>Nome do Paciente:</span> ${NP}   <span>Idade do Paciente:</span> ${idade} </div> 
      
      <div><span>Endereço:</span> ${ED} <span>Cidade:</span> ${cidade} <span> Telefone:</span> ${TL} </div>
      
      <div><span>Nome do Médico:</span> ${NM}  <span>CRM:</span>${CRM} <span>UF:</span> ${UF}</div>
      
      <div><span>Local de Atendimento:</span> ${LA}</div>
     
      <div><span>Código do Cartão Nacional de Saúde:</span> ${CNES}</div>
      
      <div><span>Prescrição Médica:</span> <br> <div class="PM"> ${PM} </div>  </div>
      
      <div> <span>Data da Emissão:</span> ${nd}</div>
  `
      


document.querySelector('#bi').addEventListener('click', function () {
      window.print();
  });


}
