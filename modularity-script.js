var artMedium = function(){
    //private section
    var artMaterials = ["Watercolor", "Pencil", "Acrylic", "Pastels"];
    var addMaterial = function(material) {
        artMaterials.push(material);
    }

    var countItems = function() {
        console.log(artMaterials.length);
    }
    
    //public section
    return {
        newMaterial : addMaterial,
        cartTotal : countItems,
    }
}();



artMedium.cartTotal();

//add a material
artMedium.newMaterial("Gouache");

artMedium.cartTotal();