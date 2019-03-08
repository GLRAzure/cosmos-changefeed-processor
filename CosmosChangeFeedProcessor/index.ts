import {AzureFunction, Context} from '@azure/functions';

const cosmosDBTrigger: AzureFunction = async function(
  context: Context,
  documents: any[]
): Promise<void> {
  if (!!documents && documents.length > 0) {
    context.log('Change feed document Id: ', documents[0].id);

    context.bindings.outputBlob = JSON.stringify(documents[0]);
  }
};

export default cosmosDBTrigger;
