import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main2`,
  events: [
    {
      http: {
        method: 'post',
        path: 'hello2'
      },
    },
  ],
  layers: [{Ref:"DemoLayer2LambdaLayer"}]
};
