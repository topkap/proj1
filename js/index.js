let xhr = new XMLHttpRequest();
xhr.open("GET", "index.json");
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let menu = JSON.parse(xhr.responseText);

    let results = document.querySelectorAll(".result");
    results.forEach((result, index) => {
      let output = "";
      output += `
          <h3>${menu[index].name}</h3>
          <p>${menu[index].desc}</p>
          <a href="/proj1/sub/sub2.html" class="more">${menu[index].plus}<i class="xi-plus-min"></i></a>
      `;
      result.innerHTML = output;
    });

  }
};
