module.exports =
{
    images: {
        domains: ['cdn2.thecatapi.com']
    },
    async Headers() {
        return [
            {
                source: '/cats',
                headers: [
                    {
                        key: 'x-api-key',
                        value: process.env.CAT_API_KEY,
                    },
                    {
                        key: 'content-type',
                        value: 'application/json',
                    }
                ]
            }
        ]
    }
}
