const fetchData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

const displayData = async () => {
    const data = await fetchData();

    if (data) {
        const dataContainer = document.getElementById('data');
        data.forEach(item => {
            const div = document.createElement('div');
            div.textContent = `Title: ${item.title} - Body: ${item.body}`;
            dataContainer.appendChild(div);
        });
    }
}

displayData();