import { Timestamp, TimestampTemplateEntry } from '../../dist';

export class TestTimestamp extends Timestamp {

	public getParsedTemplate(): TimestampTemplateEntry[] {
		return this.parsedTemplate;
	}

}
