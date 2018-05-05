# name: category
# about: Category list
# version: 0.0.1
# authors: Evg

enabled_site_setting :show_private_categories

after_initialize do

  # add info category
  add_to_serializer(:basic_category, :categorization, false) { object.custom_fields['categorization'] }
  add_to_serializer(:basic_category, :categorqa, false) { object.custom_fields['categorqa'] }
  
end
