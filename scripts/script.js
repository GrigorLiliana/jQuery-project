var actors = [
  {
    category: "male",
    name: "magnus jensen",
    picture: "https://randomuser.me/api/portraits/men/29.jpg"
  },
  {
    category: "male",
    name: "richard bradley",
    picture: "https://randomuser.me/api/portraits/men/95.jpg"
  },
  {
    category: "male",
    name: "eduardo martin",
    picture: "https://randomuser.me/api/portraits/men/7.jpg"
  },
  {
    category: "female",
    name: "norah faure",
    picture: "https://randomuser.me/api/portraits/women/11.jpg"
  },
  {
    category: "female",
    name: "rose clarke",
    picture: "https://randomuser.me/api/portraits/women/28.jpg"
  },
  {
    category: "female",
    name: "adeline mathieu",
    picture: "https://randomuser.me/api/portraits/women/6.jpg"
  },
  {
    category: "baby",
    name: "joe edwards",
    picture: "https://randomuser.me/api/portraits/lego/5.jpg"
  },
  {
    category: "baby",
    name: "bob kelley",
    picture: "https://randomuser.me/api/portraits/lego/2.jpg"
  },
  {
    category: "baby",
    name: "john doe",
    picture: "https://randomuser.me/api/portraits/lego/1.jpg"
  }
];

$(function() {
  //list of actors
  for (const actor of actors) {
    //add the cards
    const newCard = $(".d-none").clone();
    newCard.find(".card-title").text(actor.name);
    newCard.find("img").attr("src", actor.picture);
    newCard.addClass(actor.category);
    newCard.removeClass("d-none");
    newCard.appendTo(".card-columns");
    //add the select option
    const newOption = $("#select-example").clone();
    newOption.text(actor.name);
    newOption.val(actor.name);
    newOption.appendTo("#actor-select");
  }
  //hidding the Female and Baby
  $(".baby, .female").hide(1000);

  //listen the change event
  $("[name='category']") // select the radio by its id
    .on("change", function() {
      // bind a function to the change event
      if ($(this).is(":checked")) {
        // check if the radio is checked
        var val = $(this).val(); // retrieve the value
        console.log(val);
        displayCard(val);
      }
    });
  $(".card").on("click", function() {
    $(".card").removeClass("bg-primary text-white");
    $(this).addClass("bg-primary text-white");
    const actor = $(this)
      .find("h5")
      .text();
    console.log(actor);
    $("#actor-select").val(actor);
  });
});

function displayCard(category) {
  const cats = ["male", "female", "baby"];
  const index = cats.indexOf(category);
  console.log(index);

  $("." + cats[(index + 0) % 3]).show(1000);
  $("." + cats[(index + 1) % 3]).hide(1000);
  $("." + cats[(index + 2) % 3]).hide(1000);
  //set the select of the form
  $("#category-select").val(category);
}
