let xhr = new XMLHttpRequest();
xhr.open("GET", "sub4.json");
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let notice = JSON.parse(xhr.responseText);

    let results = document.querySelectorAll(".result");
    results.forEach((result, index) => {
      let output = "";
      output += `
      <div class="box">
      <figure><img src="${notice[index].img}" alt=""></figure>
      <div class="bottom-box">
        <h4 class="category-tit">${notice[index].tit}</h4>
        <span class="category-date">${notice[index].date}</span>
      </div>
    </div>
      `;
      result.innerHTML = output;
    });

  }
};
