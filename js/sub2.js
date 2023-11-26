let xhr = new XMLHttpRequest();
xhr.open("GET", "sub2.json");
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let coffe = JSON.parse(xhr.responseText);

    let results = document.querySelectorAll(".result");
    results.forEach((result, index) => {
      let output = "";
      output += `
      <figure><img src="${coffe[index].img}" alt=""></figure>
      <span>${coffe[index].number}</span>
      <p>${coffe[index].desc}</p>
      `;
      result.innerHTML = output;
    });

  }
};
