
const container = document.getElementById('results');

// Thêm sự kiện `keyup` vào ô input để kích hoạt tìm kiếm
let tagInput = document.getElementById('search-input');

tagInput.addEventListener('input', (e) => {
    let valueSearch = e.target.value.trim();
    fetchData(valueSearch)
});

async function fetchData(valueSearch) {
    fetch(`/api/all?q=${valueSearch}`)
        .then(
            response => response.json()
        )
        .then(data => {
            let items = [...data];
            container.innerHTML = "";


            const htmlContent = items.map(item => `
                        <div class= 'w-100'>
                            <a href='/product/${item.slug}' class= 'search-box-result'>
                            <img src= ${item.img} width= '40px'>
                            <h3>${item.title}</h3>
                             </a>
                        </div>
                         <hr>
                    `).join('');

            // Hiển thị kết quả trong div #results
            container.innerHTML = htmlContent;
        })
        .catch(error => {
            console.log('Lỗi khi lấy dữ liệu:');
        });
}

