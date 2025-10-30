import { type ZodSchema, z } from 'zod';

type TriggerEvent =
    | {
          type: 'async';
          name: string;
          description: string;
      }
    | {
          type: 'sync';
          name: string;
          description: string;
          outputSchema: ZodSchema;
      };

export type AgentConfig = {
    id: string;
    name: string;
    description: string;
    triggerEvents: TriggerEvent[];
    config: {
        appId: string;
        accountId: string;
        widgetKey: string;
    };
};
export const AGENT_CONFIGS: AgentConfig[] = [
    {
        id: '27dafca6-3e4d-461e-a350-ee5638c79131',
        name: 'Universal Helper Agent',
        description:
            'An AI agent designed to assist with a wide array of tasks across multiple domains, providing users with comprehensive support.',
        triggerEvents: [
            {
                type: 'async',
                name: 'user-greeted',
                description: 'Trigger when user is greeted with hello world'
            },
            {
                type: 'sync',
                name: 'logged-in-user-greet',
                description: 'trigger when logged in user is greeted',
                outputSchema: z.object({
                    message: z.string(),
                    success: z.boolean()
                })
            },
            {
                type: 'async',
                name: 'everything',
                description: 'trigger on any request'
            }
        ],
        config: {
            appId: 'df69c76c-e08f-4b06-b897-85af8b295518',
            accountId: 'default-account',
            widgetKey: 'ZUheHaYKiFxm4fzAOFHdBk2asjaoWi5yAszvCzMm'
        }
    }
];
