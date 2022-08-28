import axios from "axios";

export async function getPostsOfcats() {
      try {
            const response = await axios.get(`https://api.thecatapi.com/v1/breeds`)
            return response.data;
      } catch (error) {
            console.error(error);
      }

}

// const key = "ffa6b3157207c0caf7f0030c18d143b9";
// const secret = ce85e6b9d0cdb0bf;







