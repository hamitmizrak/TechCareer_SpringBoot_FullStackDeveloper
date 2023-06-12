// axios
import axios from "axios"

// PERSISTE URL
const BLOG_URL = "/blog/api/v1"

// CLASS
class BlogApiServices {
    // CREATE
    // localhost:2222/blog/api/v1/create
    blogServiceCreate(blogDto) {
        return axios.post(BLOG_URL + "/create", blogDto);
    }

    // LIST
    // localhost:2222/blog/api/v1/list
    blogServiceList() {
        //return axios.get(BLOG_URL+"/list");
        return axios.get(`${BLOG_URL}/list`);
    }

    // FIND
    // localhost:2222/blog/api/v1/find/1
    blogServiceFindById(id) {
        return axios.get(`${BLOG_URL}/find/${id}`);
    }

    // DELETE
    // localhost:2222/blog/api/v1/delete/1
    blogServiceDeleteById(id) {
        return axios.delete(`${BLOG_URL}/delete/${id}`);
    }

    // UPDATE
    // localhost:2222/blog/api/v1/update/1
    blogServiceUpdateById(id,blogDto) {
        blogDto.setId(id);
        return axios.put(`${BLOG_URL}/update/${id}`, blogDto);
    }

}

export default new BlogApiServices();