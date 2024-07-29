import { faker } from '@faker-js/faker';

export default class RandomPost {
    constructor() {
        this.postTitle = faker.lorem.sentence();
        this.postSummary = faker.lorem.sentences(2);
        this.postContent = faker.lorem.paragraph();
        this.postTag = faker.lorem.word();
    }
    get getTitle() {
        return this.postTitle;
    }
    get getSummary() {
        return this.postSummary;
    }
    get getContent() {
        return this.postContent;
    }
    get getTag() {
        return this.postTag;
    }
}