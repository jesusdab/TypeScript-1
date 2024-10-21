type SerieAttributes = {
  id: number;
  name: string;
  channel: string;
  seasons: number;
  description: string;
  webpage: string;
  image: string;
};

export class Serie {
  id: number;
  name: string;
  channel: string;
  seasons: number;
  description: string;
  webpage: string;
  image: string;

  constructor({ id, name, channel, seasons, description, webpage, image }: SerieAttributes) {
    this.id = id;
    this.name = name;
    this.channel = channel;
    this.seasons = seasons;
    this.description = description;
    this.webpage = webpage;
    this.image = image;
  }
}
