document.addEventListener('DOMContentLoaded', () => {
    const wordGameForm = document.getElementById('wordGameForm');
    const phoneBillForm = document.getElementById('phoneBillForm');
    const airtimeForm = document.getElementById('airtimeForm');

    const wordGameResult = document.getElementById('wordGameResult');
    const phoneBillResult = document.getElementById('phoneBillResult');
    const airtimeResult = document.getElementById('airtimeResult');

    // Word Game form submission
    wordGameForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const sentence = document.getElementById('sentence').value;

        try {
            const response = await fetch(`/api/word_game?sentence=${encodeURIComponent(sentence)}`);
            const data = await response.json();
            
            if (response.ok) {
                wordGameResult.innerHTML = `
                    <p><strong>Longest Word:</strong> ${data.longestWord}</p>
                    <p><strong>Shortest Word:</strong> ${data.shortestWord}</p>
                    <p><strong>Sum of Word Lengths:</strong> ${data.sumOfLengths}</p>
                `;
            } else {
                wordGameResult.innerHTML = `<p>${data.error}</p>`;
            }
        } catch (error) {
            wordGameResult.innerHTML = `<p>Error fetching word game data.</p>`;
        }
    });

    // Phone Bill form submission
    phoneBillForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const bill = document.getElementById('bill').value;

        try {
            const response = await fetch('/api/phonebill/total', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ bill })
            });
            const data = await response.json();

            if (response.ok) {
                phoneBillResult.innerHTML = `<p><strong>Total Phone Bill:</strong> R${data.total}</p>`;
            } else {
                phoneBillResult.innerHTML = `<p>${data.error}</p>`;
            }
        } catch (error) {
            phoneBillResult.innerHTML = `<p>Error calculating total phone bill.</p>`;
        }
    });

    // Airtime form submission
    airtimeForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const bill = document.getElementById('airtimeBill').value;
        const availableAmount = document.getElementById('availableAmount').value;

        try {
            const response = await fetch('/api/enough', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ bill, availableAmount })
            });
            const data = await response.json();

            if (response.ok) {
                airtimeResult.innerHTML = `<p><strong>Remaining Airtime:</strong> R${data.result}</p>`;
            } else {
                airtimeResult.innerHTML = `<p>${data.error}</p>`;
            }
        } catch (error) {
            airtimeResult.innerHTML = `<p>Error checking airtime.</p>`;
        }
    });
});
