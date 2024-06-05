document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        const imgSrc = item.querySelector('img').src;
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-button">&times;</span>
                <img src="${imgSrc}" alt="Full-size image">
            </div>
        `;
        document.body.appendChild(modal);

        const closeButton = modal.querySelector('.close-button');
        closeButton.addEventListener('click', () => {
            document.body.removeChild(modal);
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
    });
});

// Add styles for the modal
const style = document.createElement('style');
style.innerHTML = `
    .modal {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        z-index: 1000;
    }

    .modal-content {
        position: relative;
        max-width: 90%;
        max-height: 90%;
    }

    .modal-content img {
        width: 100%;
        height: auto;
    }

    .close-button {
        position: absolute;
        top: 10px;
        right: 10px;
        color: white;
        background: black;
        border: none;
        font-size: 30px;
        cursor: pointer;
    }
`;
document.head.appendChild(style);
