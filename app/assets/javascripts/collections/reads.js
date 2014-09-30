Bsstrss.Collections.Reads = Backbone.Collection.extend({
	url: '/api/entry_reads',
	model: Bsstrss.Models.Read,

	getOrFetch: function(id) {
		var reads = this;
		var read = this.get(id);
		if (read) {
			read.fetch();
		} else {
			read = new Bsstrss.Models.read({ id: id });
			read.fetch({
				success: function() { reads.add(read) }
			});
		}
		return read;
	}
})