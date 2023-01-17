export type StreamInfo = {
  /**
   * A universally unique stream ID that should match the channel.
   */
  streamId: string;
  /**
   * A description of the stream provided by the stream's host
   */
  description: string;
  /**
   * The name of the person who created the stream, and the person who will be hosting the stream.
   */
  hostsName: string;
  /**
   * A URL that points to the hosts chosen image.
   */
  hostsAvatar: string;
  /**
   * The header that spans the top of the streams panel
   */
  header: string;
};

/**
 * The Data Input Object that goes into the AccordionComponent
 */
export type StreamsAccordionDIO = {
  /**
   * A list of Stream Info objects used to create pannels in the stream accrodion.
   */
  streamList: StreamInfo[];
};
