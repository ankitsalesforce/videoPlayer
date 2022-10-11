import { LightningElement } from 'lwc';
import VIDEO from '@salesforce/resourceUrl/Video';

export default class VideoPlayer extends LightningElement {
    videoUrl = VIDEO;
}