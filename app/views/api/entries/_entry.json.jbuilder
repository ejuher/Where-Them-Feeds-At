json.(entry, :id, :title, :published, :image, :summary, :url)
json.read (current_user.read_entries.include?(entry) ? true : false)
