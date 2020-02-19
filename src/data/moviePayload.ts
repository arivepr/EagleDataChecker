import { any } from "prop-types";
import { isEnumBody } from "@babel/types";

/* 
    This file defines how the application draws the information from IMDB and compares to the payload taken from Amazon Prime Video services.
    This defines the "middleware" of the app. Regardless of what api is plugged into it, it will serve the same purpose using it's own logic.
    It does not care how the data is given to it. 
*/

const movieInterface = {
    title:String, 
    imdbID:String,
    writers:[String],
    director:String
}


export const processPayload = (batch:any, payload:any) => {
    console.log('Here we will process our data');
    console.log(batch);
}

export const compareData = (newBatch: any, dbFile: any) => {
    let results = {
        positive:[{}],
        negative:[{}]
    }
    console.log('Here we compare the two different JSON files');
    console.log("Amazon Payload: ", dbFile);
    console.log("New batched files: ", newBatch);

    if(dbFile[0].title === newBatch.Title){
        results.positive.push(dbFile[0].title);
    }else {

        results.negative.push(["Title",newBatch.Title]);
    }
    try {
        if(dbFile[0].imdbID === undefined){
            console.log("This is our imdbID", newBatch);
            results.negative.push(["imdbID",newBatch.imdbID]);
        }
    } catch (error) {
        console.log(error);
    }

    if(dbFile[0].views[0].writers.toString(dbFile.writers) === newBatch.Writer ){
        results.positive.push(dbFile.writers);
    }else {
        console.log("This is our writers: ", dbFile[0].views[0].writers.toString(dbFile.writers));
        results.negative.push(["Writer", newBatch.Writer])
    }

    if(dbFile[0].views[0].directors.toString() === newBatch.Director){
        results.positive.push(dbFile[0].views[0].directors.toString())
    }else{
        console.log("This is our director", dbFile[0].views[0].director.toString());
        results.negative.push(["Director", dbFile[0].views[0].director]);
    }
        

    return results;
}

export const parseMovieObject = (movie:any) => {
    console.log("Parsing new movie into Obj", movie);
    let obj = movieInterface;

    try {
        obj.title = movie.title
    } catch (error) {
        console.log("ERROR PARSING: ", error);
    }

    try {
        obj.imdbID = movie.imdbID;
    } catch (error) {
        console.log("ERROR PARSING: ", error);
    }

    try{
        obj.director = movie.director;
    } catch (error) {
        console.log("ERROR PARSING: ", error);
    }

}
