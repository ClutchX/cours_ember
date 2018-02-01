import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return {
            articles: [
                {
                    Id: 1,
                    Name: "Article 1",
                    Description: "Description article 1"
                },
                {
                    Id: 2,
                    Name: "Article 2",
                    Description: "Description article 2"
                },
                {
                    Id: 3,
                    Name: "Article 3",
                    Description: "Description article 3"
                }
            ]
        }
    }
});
