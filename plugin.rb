# name: discourse-category-home
# about: The home category
# version: 0.0.1
# authors: Evg

register_asset "stylesheets/portal.scss"

after_initialize do

  add_to_class :post, :excerpt_for_topic do
      Post.excerpt(cooked, 300, strip_links: true)
  end
  add_to_serializer(:listable_topic, :include_excerpt?) { true }
  
  # add info category
   Site.preloaded_category_custom_fields << "categorimg" if Site.respond_to? :preloaded_category_custom_fields 
   Site.preloaded_category_custom_fields << "categordiscr" if Site.respond_to? :preloaded_category_custom_fields 
  
   add_to_serializer(:basic_category, :categorimg, false) { object.custom_fields['categorimg'] }
   add_to_serializer(:basic_category, :categordiscr, false) { object.custom_fields['categordiscr'] }

end
