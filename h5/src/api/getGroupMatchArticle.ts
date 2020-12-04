import request from "@/utils/request";

/**
 * 
 * @param guid 群号
 */
export function getGroupMatchArticle(guid: number): any {
    return request('get', 'https://api.xc.cool/api/matches', {
        guid,
        status: 1
    }, false, {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYmV0YS5hcGkueGMuY29vbFwvYXBpXC9xdWlja2xvZ2luIiwiaWF0IjoxNjA3MDcwNDE5LCJuYmYiOjE2MDcwNzA0MTksImp0aSI6IjlEQkl4ZXZ6R3V2YnZsa3ciLCJzdWIiOjc2LCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.u8ATxkZVpYaMhVShU1df74oVUAAyhl9Hu0wzpasqVTo',
        'Accept': 'application/vnd.xc.v1+json'
    })
}