import OpenAI from 'openai';
import 'dotenv/config';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const client = new OpenAI({
    apiKey: OPENAI_API_KEY,
});

const stream = await client.responses.create({
    model: 'gpt-4.1',
    input: 'Write a story about a robot',
    temperature: 0.7,
    max_output_tokens: 50,
    stream: true
});

for await (const event of stream) {
    if (event.delta)
        console.log(event.delta);
}