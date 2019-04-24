class cat {
    constructor(name, picture, clicks = 0) {
      this.name = name;
      this.picture = picture;
      this.clicks = clicks;
    } 
  }
  
  // model part
  var model = {
    cats: [
      new cat("Andy", "img/cat.jpg"), 
      new cat("Cliff", "img/cat2.jpg"), 
      new cat("Alice", "img/cat3.jpg"),
      new cat("Bobby", "img/cat4.jpg"),
      new cat("Saxby", "img/cat5.jpg"),
      new cat("Mocha", "img/cat6.jpeg")
    ],
    addCat: function(catName, catPicture) {
      const cat = {
        name: catName,
        picture: catPicture,
        clicks: 0
      }
      model.cats.push(cat);
    }
  }
  // Middle part
  var octopus = {
    getCats: function(){
      return model.cats;
    },
    addCat: function(catName, catPicture) {
      model.addCat(catName, catPicture);
    }
  }
  
  // View part
  var view = {
    // Initialize the left cat list
    init: function() {
      // select left column in dom
      const leftColumn = document.querySelector(".col-4");
      //reset left column
      leftColumn.innerHTML = "";
      
      // Construct cat list
      const ul = document.createElement("ul");
      ul.className = "list-group";
      for(let cat of octopus.getCats()) {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = cat.name;
        li.addEventListener("click", ()=>{
            this.render(cat);
        })
        ul.appendChild(li);
      }
      leftColumn.appendChild(ul);
  
      // add an admin button
      const adminBtn = document.createElement("button");
      adminBtn.textContent = "Add New Cat";
      adminBtn.className = "btn btn-warning mt-3";
      adminBtn.addEventListener("click", this.showForm);
      leftColumn.appendChild(adminBtn);
  
      // Add an empty form
      const form = document.createElement("form");
      form.addEventListener("submit", this.addCat);
      leftColumn.appendChild(form);
    },
    // render the cat on the right
    render: function(cat) {
      const rightColumn = document.querySelector(".col-8");
      // Clear the display area
      rightColumn.innerHTML = "";
      // display the current cat
      const h1 = document.createElement("h1");
      h1.textContent = cat.name;
      rightColumn.appendChild(h1);
      
      const img = document.createElement("img");
      img.setAttribute("src", cat.picture);
      img.setAttribute("alt", "cat");
      img.addEventListener("click", ()=>{
        cat.clicks++; 
        h2.textContent = `Clicks: ${cat.clicks}`;
      })
      rightColumn.appendChild(img);
  
      const h2 = document.createElement("h2");
      h2.textContent = `Clicks: ${cat.clicks}`;
      // h2.textContent = "Clicks: " + cat.clicks; 
      rightColumn.appendChild(h2);
    },
    showForm: function() {
      const form = document.querySelector("form");
      // reset the form
      form.innerHTML = "";
      // Adding name input 
      const nameGroup = document.createElement("div");
      nameGroup.className = "form-group";
      const nameLabel = document.createElement("label");
      nameLabel.textContent = "Cat Name";
      nameLabel.setAttribute("for", "catName");
      const nameInput = document.createElement("input");
      nameInput.className = "form-control";
      nameInput.setAttribute("id", "catName");
      nameGroup.appendChild(nameLabel);
      nameGroup.appendChild(nameInput);
      form.appendChild(nameGroup);
  
      // Adding picture input
      const imgGroup = document.createElement("div");
      imgGroup.className = "form-group";
      const imgLabel = document.createElement("label");
      imgLabel.textContent = "Cat Picture";
      imgLabel.setAttribute("for", "catPicture");
      const imgInput = document.createElement("input");
      imgInput.className = "form-control";
      imgInput.setAttribute("id", "catPicture");
      imgGroup.appendChild(imgLabel);
      imgGroup.appendChild(imgInput);
      form.appendChild(imgGroup);
  
      // Adding buttons
      const submitBtn = document.createElement("button");
      submitBtn.textContent = "Submit";
      submitBtn.className = "btn btn-success";
      form.appendChild(submitBtn);
      
      const cancelBtn = document.createElement("button");
      cancelBtn.textContent = "Cancel";
      cancelBtn.className = "btn btn-danger float-right"; 
      cancelBtn.setAttribute("type", "button");
      cancelBtn.addEventListener("click", ()=> {
        form.innerHTML="";
      })
      form.appendChild(cancelBtn);
    },
  
    addCat: function(e) {
      e.preventDefault();
      const catName = document.querySelector("#catName").value;
      const catPicture = document.querySelector("#catPicture").value;
      octopus.addCat(catName, catPicture);
      view.init();
    }
  }
  
  view.init();