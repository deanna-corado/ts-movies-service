Feature: Movie Management
    As an authenticated user
    I want to view and manage the movie service
    So that I can maintain an accurate list of films and their details

        Scenario: Retrieve all movies
            Given the movie service is active and contains a list of movies
            When the user sends a GET request to "/api/v1/movies"
            Then the response status should be 200
            And the response body should contain a list of movies 

        Scenario: Retrieve movie by ID
            Given a movie exists with a specific ID in the database
            When the user sends a GET request to "/api/v1/movies/:id"
            Then the response status should be 200
            And the response body should match the requested movie details

        Scenario: Create a movie with valid data
            Given the user provides valid movie details including title and director
            When the user sends a POST request to "/api/v1/movies"
            Then the response status should be 201
            And the system should return the newly created movie object

        Scenario: Create a movie with invalid data
            Given the user provides movie details with missing fields
            When the user sends a POST request to "/api/v1/movies"
            Then the response status should be 400
            And the error message should return a validation failure

        Scenario: Update movie details
            Given there is an existing movie with a specific ID
            When a PATCH request is sent to "/api/v1/movies/:id" with updated data
            Then the response status should be 200
            And the response body should reflect the updated movie information

        Scenario: Delete a movie
            Given an existing movie exists with a specific ID
            When a DELETE request is sent to "/api/v1/movies/:id"
            Then the response status should be 200
            And the response body should contain "Movie deleted successfully"

        Scenario: Handle movie not found
            Given a movie ID that does not exist in the database
            When the user sends a GET request to "/api/v1/movies/9999"
            Then the response status should be 404
            And the error message should be "Movie not found"

        Scenario: Unauthorized access to movie services
            Given a user is not logged in or has an invalid token
            When the user attempts to access any "/api/v1/movies" endpoint
            Then the response status should be 401
            And the error message should be "Unauthorized"