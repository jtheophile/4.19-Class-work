class cat {
    constructor(name, picture, clicks = 0) {
        this.name = name; 
        this.picture = picture;
        this.clicks = clicks;
    }
}

// model part - the function of the app itself
var model = {
    cats: [
        new cat("Billy", "img/cat1.jpg"),
        new cat("Bob", "img/cat2.jpg"),
        new cat("Thorton", "img/cat3.jpg"),
        new cat("Jelly", "img/cat4.jpg"),
        new cat("Bean", "img/cat5.jpg"),
        new cat("Blue", "img/cat6.jpg")
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
// Middle Part - calculating the info and function that need be displayed
var octopus = {
    getCats: function(){
        return model.cats;
    },
    addCat: function(catName, catPicture) {
     model.addCat(catName, catPicture);
    }
}

// View Part
var view = { 
    // init the left cat list
    init: function() {
        // Select left column in dom
        const leftColumn = document.querySelector(".col-4");
        //Reset left column
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

          // Add an admin button
          const adminBtn = document.createElement("button");
          adminBtn.textContent = "Add New Cat";
          adminBtn.className = "btn btn-warning mt-3";
          adminBtn.addEventListener("click", this.showForm);
          leftColumn.appendChild(adminBtn);
        
          // Add empty form 
          const form = document.createElement("form");
          form.addEventListener("submit", this.addCat);
          leftColumn.appendChild(form);
        },
        // render the cat on the right
        render: function(cat) {
            const rightColumn = document.querySelector(".col-8");
            // Clear the display area
            rightColumn.innerHTML = "";
            // Display the current cat
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
            // h2. textContent = 'Clicks: " +cat.clicks;
            rightColumn.appendChild(h2);
        },
        showForm: function() {
            const form = document.querySelector("form");
            // reset form
            form.innerHTML = ""; 
            // Adding name input - have to create the name & cat pic b
            const nameGroup = document.createElement("div");
            nameGroup.className = "form-group";
            const nameLabel = document.createElement("label");
            nameLabel.textContent = "Cat Name"; 
            nameLabel.setAttribute("for", "catName");
            const nameInput = document.createElement("input");
            nameInput.className = "form-contol";
            nameInput.setAttribute("id", "catName");
            nameGroup.appendChild(nameLabel);
            nameGroup.appendChild(nameInput);
            form.appendChild(nameGroup);

            // Adding picture input
            const imgGroup = document.createElement("div");
            imgGroup.className = "form-group";
            const imgLabel = document.createElement("label");
            imgLabel.textContent = " Cat Picture";
            imgLabel.setAttribute("for", "catPicture");
            const imgInput = document.createElement("input");
            imgInput.className = "form-control";
            imgInput.setAttribute("id", "catPicture");
            imgGroup.appendChild(imgLabel);
            imgGroup.appendChild(imginput);
            form.appendchild(imgGroup);

            // Adding Buttons
            const submitBtn = document.createElement("button");
            submitBtn.textContent = "Submit";
            submiteBtn.className = "btn btn-sucess";
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