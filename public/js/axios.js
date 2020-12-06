function getData() {
    axios({
        method: 'get',
        url: 'http://localhost:5000/programmes'
    }).then(res => showData(res)).catch(err => { console.log(err) })
}

document.getElementById('get').addEventListener('click', getData)
document.getElementById('post').addEventListener('click', postData)
let error = document.getElementById('error')
// POST
function postData() {
    let userId = document.getElementById('userID').value
    let title = document.getElementById('title').value
    let content = document.getElementById('content').value

    if (!userId || !title || !content) {
        alert('all fields are required')
    } else {
        axios({
            method: 'post',
            url: 'http://localhost:5000/programmes',
            data: {
                title,
                content,
                userId
            }
        }).then(res=> showData(res)).catch(err=>{console.log(err)})
    }
}


function showData(res) {
    document.getElementById('results').innerHTML = `
        <div class="card my-3">
            <h2>Status ${res.status}</h2>
        </div>
        <div class="card card-body my-3">
            <pre><small>Status ${JSON.stringify(res.data, null, 2)}</small></pre>
        </div>
    `
}