let xhr = new XMLHttpRequest();
xhr.open("GET", "sub3.json");
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let procedure = JSON.parse(xhr.responseText);

    let results = document.querySelectorAll(".result");
    results.forEach((result, index) => {
      let output = "";
      output += `
      <p>${procedure[index].store}<i class="xi-angle-right"></i> </p>
      `;
      result.innerHTML = output;
    });

  }
};
