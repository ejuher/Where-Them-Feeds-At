# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20141016165510) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "categories", ["name"], name: "index_categories_on_name", unique: true, using: :btree

  create_table "entries", force: true do |t|
    t.string   "title"
    t.text     "url"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "feed_id"
    t.datetime "published"
    t.text     "content"
    t.text     "summary"
    t.text     "image"
  end

  add_index "entries", ["feed_id"], name: "index_entries_on_feed_id", using: :btree

  create_table "entry_reads", force: true do |t|
    t.integer  "user_id"
    t.integer  "entry_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "entry_reads", ["entry_id", "user_id"], name: "index_entry_reads_on_entry_id_and_user_id", using: :btree
  add_index "entry_reads", ["entry_id"], name: "index_entry_reads_on_entry_id", using: :btree
  add_index "entry_reads", ["user_id"], name: "index_entry_reads_on_user_id", using: :btree

  create_table "feed_categories", force: true do |t|
    t.integer  "feed_id"
    t.integer  "category_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "feed_categories", ["category_id"], name: "index_feed_categories_on_category_id", using: :btree
  add_index "feed_categories", ["feed_id"], name: "index_feed_categories_on_feed_id", using: :btree

  create_table "feeds", force: true do |t|
    t.string   "title"
    t.string   "url"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "feed_url"
    t.text     "description"
  end

  create_table "subscriptions", force: true do |t|
    t.integer  "user_id"
    t.integer  "feed_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "subscriptions", ["feed_id", "user_id"], name: "index_subscriptions_on_feed_id_and_user_id", using: :btree
  add_index "subscriptions", ["feed_id"], name: "index_subscriptions_on_feed_id", using: :btree
  add_index "subscriptions", ["user_id"], name: "index_subscriptions_on_user_id", using: :btree

  create_table "user_categories", force: true do |t|
    t.integer  "user_id"
    t.integer  "category_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "user_categories", ["category_id"], name: "index_user_categories_on_category_id", using: :btree
  add_index "user_categories", ["user_id"], name: "index_user_categories_on_user_id", using: :btree

  create_table "users", force: true do |t|
    t.string   "username"
    t.string   "password_digest"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "session_token"
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
