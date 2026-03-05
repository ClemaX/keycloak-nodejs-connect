var context = $evaluation.context;
var attributes = context.attributes;

if (attributes.containsValue("user_agent", "mozilla")) {
  $evaluation.grant();
} else {
  $evaluation.deny();
}
