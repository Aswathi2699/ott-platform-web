// Define a class for creating Movie objects
class Movies{
    constructor(title, director, year){
        this.title = title;
        this.director = director;
        this.year = year;
    }

    // Method to display movie details
    displayDetails(){
        console.log('Title: ${this.title}, Director: ${this.director}, Year: ${this.year}');
    }
}

// Create some Movie objects
const movie1 = new Movies("Inception", "Christopher Nolan", 2010);
const movie2 = new Movies("The Shawshank Redemption", "Frank Darabont", 1994);
const movie3 = new Movies("The Godfather", "Francis Ford Coppola", 1972);

//Display details of the movies
movie1.displayDetails();
movie2.displayDetails();
movie3.displayDetails();