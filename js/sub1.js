let xhr = new XMLHttpRequest();
xhr.open("GET", "sub1.json");
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let story = JSON.parse(xhr.responseText);

    let results = document.querySelectorAll(".result");
    results.forEach((result, index) => {
      let output = "";
      output += `
          <h3>${story[index].title}</h3>
          <p>${story[index].desc}</p>
      `;
      result.innerHTML = output;
    });

  }
};
