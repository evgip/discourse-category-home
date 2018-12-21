# name: discourse-category-home
# about: The home category
# version: 0.0.1
# authors: Evg

register_asset "stylesheets/portal.scss"

after_initialize do

  # add info category
  add_to_serializer(:basic_category, :categorimg, false) { object.custom_fields['categorimg'] }
  add_to_serializer(:basic_category, :categordiscr, false) { object.custom_fields['categordiscr'] }

end
