import { InvoiceBuilderModule } from './invoice-builder.module';

describe('InvoiceBuilderModule', () => {
  let invoiceBuilderModule: InvoiceBuilderModule;

  beforeEach(() => {
    invoiceBuilderModule = new InvoiceBuilderModule();
  });

  it('should create an instance', () => {
    expect(invoiceBuilderModule).toBeTruthy();
  });
});
