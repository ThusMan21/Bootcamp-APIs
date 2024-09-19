import express from 'express';
import cors from 'cors';
import { longestWord, shortestWord, wordLengths } from './public/wordgame.js';
import TotalPhoneBill from './public/totalPhoneBill.js';
import enoughAirtime from './public/enoughAirtime.js';

const app = express();
const PORT = process.env.PORT || 3006;

// Middleware setup
app.use(cors());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Route definitions

// Word Game Endpoint
app.get("/api/word_game", (req, res) => {
    const sentence = req.query.sentence;

    if (!sentence) {
        return res.status(400).json({ error: 'No sentence provided' });
    }

    const longest = longestWord(sentence);
    const shortest = shortestWord(sentence);
    const totalLengths = wordLengths(sentence);

    return res.json({
        longestWord: longest,
        shortestWord: shortest,
        sumOfLengths: totalLengths,
    });
});

// Total Phone Bill Endpoint
app.post("/api/phonebill/total", (req, res) => {
    const { bill } = req.body;

    if (!bill) {
        return res.status(400).json({ error: 'No bill data provided' });
    }

    const total = TotalPhoneBill(bill);
    return res.json({ total });
});


// enough Airtime Endpoint
app.post("/api/enough", (req, res) => {
    const { bill, availableAmount } = req.body;

    if (!bill || availableAmount === undefined) {
        return res.status(400).json({ error: 'Insufficient data provided' });
    }

    const remainingAirtime = enoughAirtime(bill, availableAmount);
    return res.json({ result: remainingAirtime });
});



app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});